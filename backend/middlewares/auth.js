import { clerkClient, getAuth } from '@clerk/express';
import doctorModel from '../models/doctorModel.js'; 

const isAuthenticated = async (req, res, next) => {
    try {
        const auth = getAuth(req);
        if (!auth || !auth.userId) {
            return res.status(401).json({ success:false, message: 'Unauthorized' });
        }

        req.user = auth.userId; // Attach userId to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getUser = async(req, res, next) => {
    // Get the `userId` from the `Auth` object
    const userId = req.auth.userId
    // If user isn't authenticated, return a 401 error
    if (!userId) {
        res.status(401).json({ error: 'User not authenticated' })
    }
    
    // Use `clerkClient` to access Clerk's Backend SDK methods
    // and get the user's User object
    const user = await clerkClient.users.getUser(userId)
    console.log(userId)
    const mongoUser = await doctorModel.findOne({ clerk_uID: userId })
    if (!mongoUser) {
        return res.status(404).json({ error: 'User not found' })
    }
    req.user = {...user, mongoUser} // Attach the user object to the request object
    
    next() // Proceed to the next middleware or route handler
}

const isAdmin = (req, res, next) => {
    const user = req.user; // Assuming you have the user object attached to the request
    // Check if the user has the admin role
    if (user && user.publicMetadata.role === 'ADMIN') {
        next(); // User is an admin, proceed to the next middleware or route handler
    } else {
        res.status(403).json({ message: 'Forbidden: Admin access required' });
    }
}

const createClerkPatient = async (req, res, next) => {
    try {
        const { email, patientName, password } = req.body;

        if (!email || !patientName || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        console.log(req.body)
        const user = await clerkClient.users.createUser({
            emailAddress: [email],
            patientName: patientName,
            password: password,
            publicMetadata: { role: 'PATIENT' },
        });

        req.clerkData = clerkUser; // Attach the user object to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({success:false, message: 'Internal Server Error' });
    }
};

const createClerkDoctor = async (req, res, next) => {
    try {
        const { email, name, password } = req.body;

        if (!email || !name || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        console.log(req.body)
        const clerkUser = await clerkClient.users.createUser({
            emailAddress: [email],
            username: name,
            password: password,
            publicMetadata: { role: 'DOCTOR' },
        });

        req.clerkData = clerkUser; // Attach the user object to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({success:false, message: 'Internal Server Error' });
    }
};
export { isAuthenticated, getUser, isAdmin, createClerkPatient, createClerkDoctor };