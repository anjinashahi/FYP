"use client"

import { useState, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Upload } from "lucide-react"

export default function PatientUploadSearch() {
  const [file, setFile] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleFileChange = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }, [])

  const handleUpload = useCallback(() => {
    if (file) {
      // Implement your file upload logic here
      console.log("Uploading file:", file.name)
    }
  }, [file])

  const handleSearch = useCallback(() => {
    // Implement your search logic here
    console.log("Searching for:", searchQuery)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-primary-light/20">
      {/* Search Section */}
      <div className="bg-primary py-4">
        <div className="container mx-auto">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-white"
            />
            <Button onClick={handleSearch} className="bg-primary-secondary hover:bg-primary-accent transition-colors">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-primary">Patient Records Upload</h1>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging ? "border-primary-accent bg-primary-light/10" : "border-primary-light"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Input type="file" onChange={handleFileChange} className="hidden" id="fileInput" />
            <label
              htmlFor="fileInput"
              className="cursor-pointer text-primary-secondary hover:text-primary-accent transition-colors"
            >
              {file ? file.name : "Drag and drop a file here or click to select"}
            </label>
          </div>
          <Button
            onClick={handleUpload}
            disabled={!file}
            className="mt-4 bg-primary hover:bg-primary-secondary transition-colors"
          >
            <Upload className="mr-2 h-4 w-4" /> Upload File
          </Button>
        </div>
      </div>
    </div>
  )
}

