import { Search } from "lucide-react"
import { useState } from "react"
import axios from "axios"

const SymptomsForm = () => {
  const [loading, setLoading] = useState(false)

  const symptoms = [
    { id: "acne", label: "Acne" },
    { id: "hairThinning", label: "Hair Thinning" },
    { id: "irregularPeriods", label: "Irregular Periods" },
    { id: "hairGrowth", label: "Hair Growth" },
    { id: "weightGain", label: "Weight Gain" },
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    // Transform values from 'yes'/'no' → boolean
    const transformedData = {
      userID: data.patientId,
      acne: data.acne === "yes",
      hairThinning: data.hairThinning === "yes",
      irregularPeriods: data.irregularPeriods === "yes",
      hairGrowth: data.hairGrowth === "yes",
      weightGain: data.weightGain === "yes",
      remarks: data.remarks,
    }

    try {
      setLoading(true)
      const res = await axios.post("/api/symptoms/submit", transformedData)
      console.log(res.data)
      alert("Assessment submitted successfully.")
    } catch (err) {
      console.error(err)
      alert("Submission failed.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#A5D7E8]/10 p-6">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#576CBC] text-white p-6">
          <h2 className="text-2xl font-semibold">Health Assessment Form</h2>
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Patient ID Search */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#A5D7E8]/20">
              <div className="space-y-3">
                <label htmlFor="patientId" className="block text-[#19376D] text-lg font-medium">
                  Patient ID
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#576CBC] h-4 w-4" />
                  <input
                    id="patientId"
                    name="patientId"
                    type="text"
                    placeholder="Search patient ID..."
                    className="w-full pl-10 py-2 border border-[#A5D7E8] rounded-md focus:border-[#576CBC] focus:ring-1 focus:ring-[#576CBC] outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Symptoms */}
            {symptoms.map((symptom) => (
              <div key={symptom.id} className="bg-white p-6 rounded-lg shadow-sm border border-[#A5D7E8]/20">
                <div className="space-y-3">
                  <label className="block text-[#19376D] text-lg font-medium">{symptom.label}</label>
                  <div className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`${symptom.id}-yes`}
                        name={symptom.id}
                        value="yes"
                        className="w-4 h-4"
                      />
                      <label htmlFor={`${symptom.id}-yes`} className="text-[#0B2447]">
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`${symptom.id}-no`}
                        name={symptom.id}
                        value="no"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <label htmlFor={`${symptom.id}-no`} className="text-[#0B2447]">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Remarks */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#A5D7E8]/20">
              <div className="space-y-3">
                <label htmlFor="remarks" className="block text-[#19376D] text-lg font-medium">
                  Remarks
                </label>
                <textarea
                  id="remarks"
                  name="remarks"
                  placeholder="Enter any additional notes or observations..."
                  className="w-full min-h-[120px] p-2 border border-[#A5D7E8] rounded-md focus:border-[#576CBC] focus:ring-1 focus:ring-[#576CBC] outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#19376D] hover:bg-[#0B2447] text-white text-lg py-4 rounded-md transition duration-300 ease-in-out"
            >
              {loading ? "Submitting..." : "Submit Assessment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SymptomsForm
