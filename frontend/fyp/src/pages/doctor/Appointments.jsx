import React from 'react'
import { useParams } from 'react-router-dom'
import { doctors } from '../../assets/assets'
import { useContext } from 'react'

const Appointments = () => {

  const {docId} = useParams()
  const {doctors} = useContext(doctors)

  const [docInfo, setDocInfo] = useState(null)
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }
  useEffect(() => {
    fetchDocInfo()
  }, [doctors,docId])

  return(
    <div>

    </div>
  )
}
export default Appointments;
