import { clerkClient, getAuth } from '@clerk/express';

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
    console.log(user)
    req.user = user // Attach the user object to the request object
    
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

const createClerkUser = async (req, res) => {
    try {
        const { email, firstName, lastName, password } = req.body;

        if (!email || !firstName || !lastName || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        console.log(req.body)
        const user = await clerkClient.users.createUser({
            emailAddress: [email],
            firstName: firstName,
            lastName: lastName,
            password: password,
            publicMetadata: { role: 'USER' },
        });

        res.status(201).json({ success: true , message: 'User created successfully', user });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({success:false, message: 'Internal Server Error' });
    }
};
export { isAuthenticated, getUser, isAdmin, createClerkUser };