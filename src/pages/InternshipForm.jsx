import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud, X, FileText } from "lucide-react";

const emptyEducation = () => ({ id: Date.now().toString() + Math.random().toString(16).slice(2), course: "", college: "", marks: "" });
const emptyLanguage = () => ({ id: Date.now().toString() + Math.random().toString(16).slice(2), name: "", speak: false, read: false, write: false });

const InternshipForm = ({ selectedDepartment: selectedDepartmentProp, onClose }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const selectedDepartment = selectedDepartmentProp ?? state?.selectedDepartment;
  const isModal = Boolean(selectedDepartmentProp);

  const [formData, setFormData] = useState({
    candidateName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    educations: [emptyEducation()],
    languages: [emptyLanguage()],
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleEducationChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      educations: prev.educations.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      ),
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      educations: [...prev.educations, emptyEducation()],
    }));
  };

  const removeEducation = (id) => {
    setFormData((prev) => ({
      ...prev,
      educations: prev.educations.filter((entry) => entry.id !== id),
    }));
  };

  const handleLanguageChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    }));
  };

  const addLanguage = () => {
    setFormData((prev) => ({
      ...prev,
      languages: [...prev.languages, emptyLanguage()],
    }));
  };

  const removeLanguage = (id) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.filter((lang) => lang.id !== id),
    }));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      setResumeError("Only PDF or Word documents are allowed");
      setResumeFile(null);
      return;
    }
    if (file.size > maxSize) {
      setResumeError("File size must be under 5MB");
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
    setResumeError("");
  };

  const removeResume = () => {
    setResumeFile(null);
    setResumeError("");
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.candidateName.trim()) nextErrors.candidateName = "Candidate Name is required";
    if (!formData.gender) nextErrors.gender = "Gender is required";
    if (!formData.dob) nextErrors.dob = "Date of Birth is required";
    if (!formData.email.trim()) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) nextErrors.phone = "Phone is required";
    else if (!/^[0-9+\-()\s]{7,}$/.test(formData.phone)) nextErrors.phone = "Enter a valid phone number";
    if (!formData.address.trim()) nextErrors.address = "Address is required";

    if (!formData.educations.length) nextErrors.educations = "Add at least one education entry";
    else {
      formData.educations.forEach((entry) => {
        if (!entry.course.trim() || !entry.college.trim() || !entry.marks.trim()) {
          nextErrors.educations = "All education fields are required";
        }
      });
    }

    if (!formData.languages.some((lang) => lang.name.trim())) nextErrors.languages = "Add at least one language";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedDepartment) return;
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
      return;
    }
    navigate("/internship");
  };

  if (!selectedDepartment) {
    return (
      <div className={`${isModal ? "p-6" : "min-h-screen bg-slate-50 text-slate-900 px-6 py-20"}`}>
        <div className={`${isModal ? "rounded-3xl bg-white shadow-soft p-6" : "max-w-3xl mx-auto rounded-[2rem] border border-border/80 bg-white p-10 shadow-soft text-center"}`}>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Select a department first</h1>
          <p className="text-sm text-slate-500 mb-8">
            Please choose a department before submitting your application.
          </p>
          <Button onClick={handleClose} className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">
            Back to Internship
          </Button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className={`${isModal ? "p-6" : "min-h-screen bg-slate-50 text-slate-900 px-6 py-20"}`}>
        <div className={`${isModal ? "rounded-3xl bg-white shadow-soft p-6 text-center" : "max-w-3xl mx-auto rounded-[2rem] border border-border/80 bg-white p-10 shadow-soft text-center"}`}>
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Application Submitted!</h1>
          <p className="text-sm text-slate-500 mb-2">
            Your application for <span className="font-semibold text-slate-700">{selectedDepartment}</span> has been received.
          </p>
          {resumeFile && (
            <p className="text-xs text-slate-400 mb-8">
              Resume uploaded: <span className="font-medium text-slate-600">{resumeFile.name}</span>
            </p>
          )}
          <Button onClick={handleClose} className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">
            Close
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={isModal ? "space-y-8" : "min-h-screen bg-slate-50 text-slate-900 px-6 py-14"}>
      <div className={isModal ? "" : "container mx-auto max-w-4xl"}>
        <div className={`${isModal ? "" : "rounded-[2rem] bg-white p-8 shadow-soft border border-border/80"}`}>
          {!isModal ? (
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Application</p>
              <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Application For {selectedDepartment}</h1>
              <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
                Complete the form below to submit your application.
              </p>
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Application</p>
              <h1 className="mt-3 text-3xl font-bold text-slate-900">Apply for {selectedDepartment}</h1>
              <p className="mt-2 text-sm text-slate-500">Fill in the details and submit your application.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* SELECTED DEPARTMENT */}
            <div className="grid gap-4 md:grid-cols-1">
              <div className="rounded-2xl border border-border/80 bg-slate-50 p-4">
                <p className="text-sm text-slate-700">Selected Department</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{selectedDepartment}</p>
              </div>
            </div>

            {/* NAME & GENDER */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="candidateName" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Candidate Name
                </Label>
                <Input
                  id="candidateName"
                  value={formData.candidateName}
                  onChange={(e) => handleInput("candidateName", e.target.value)}
                  placeholder="Enter full name"
                  className="mt-2"
                />
                {errors.candidateName && <p className="mt-2 text-xs text-destructive">{errors.candidateName}</p>}
              </div>
              <div>
                <Label htmlFor="gender" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Gender
                </Label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => handleInput("gender", e.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="mt-2 text-xs text-destructive">{errors.gender}</p>}
              </div>
            </div>

            {/* DOB & EMAIL */}
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="dob" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Date of Birth
                </Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleInput("dob", e.target.value)}
                  className="mt-2"
                />
                {errors.dob && <p className="mt-2 text-xs text-destructive">{errors.dob}</p>}
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInput("email", e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2"
                />
                {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            {/* PHONE & ADDRESS */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">Phone Number</Label>
                <Input id="phone" value={formData.phone} onChange={(e) => handleInput("phone", e.target.value)} placeholder="Enter phone number" className="mt-2" />
                {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="address" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">Address</Label>
                <Input id="address" value={formData.address} onChange={(e) => handleInput("address", e.target.value)} placeholder="Your address" className="mt-2" />
                {errors.address && <p className="mt-2 text-xs text-destructive">{errors.address}</p>}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="rounded-[1.75rem] border border-border/80 bg-slate-50 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Educational Details</p>
                  <p className="text-xs text-slate-500">Add one or more qualifications.</p>
                </div>
              </div>
              {errors.educations && <p className="mb-4 text-xs text-destructive">{errors.educations}</p>}
              <div className="space-y-4">
                {formData.educations.map((education) => (
                  <div key={education.id} className="grid gap-4 md:grid-cols-3">
                    <Input
                      value={education.course}
                      onChange={(e) => handleEducationChange(education.id, "course", e.target.value)}
                      placeholder="Course Name"
                    />
                    <Input
                      value={education.college}
                      onChange={(e) => handleEducationChange(education.id, "college", e.target.value)}
                      placeholder="College Name"
                    />
                    <div className="flex gap-2">
                      <Input
                        value={education.marks}
                        onChange={(e) => handleEducationChange(education.id, "marks", e.target.value)}
                        placeholder="Marks / Percentage"
                      />
                      {formData.educations.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEducation(education.id)}
                          className="rounded-full border border-border px-4 text-sm text-slate-700 transition hover:border-slate-400"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addEducation}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                + Add Education
              </button>
            </div>

            {/* LANGUAGES */}
            <div className="rounded-[1.75rem] border border-border/80 bg-slate-50 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Languages Known</p>
                  <p className="text-xs text-slate-500">Track speaking, reading and writing skills.</p>
                </div>
              </div>
              {errors.languages && <p className="mb-4 text-xs text-destructive">{errors.languages}</p>}
              <div className="space-y-4">
                {formData.languages.map((lang) => (
                  <div key={lang.id} className="grid gap-3 md:grid-cols-5 items-end">
                    <Input
                      value={lang.name}
                      onChange={(e) => handleLanguageChange(lang.id, "name", e.target.value)}
                      placeholder="Language"
                    />
                    <label className="flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={lang.speak}
                        onChange={(e) => handleLanguageChange(lang.id, "speak", e.target.checked)}
                        className="h-4 w-4 rounded border border-border"
                      />
                      Speak
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={lang.read}
                        onChange={(e) => handleLanguageChange(lang.id, "read", e.target.checked)}
                        className="h-4 w-4 rounded border border-border"
                      />
                      Read
                    </label>
                    <label className="flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={lang.write}
                        onChange={(e) => handleLanguageChange(lang.id, "write", e.target.checked)}
                        className="h-4 w-4 rounded border border-border"
                      />
                      Write
                    </label>
                    {formData.languages.length > 1 ? (
                      <button
                        type="button"
                        onClick={() => removeLanguage(lang.id)}
                        className="rounded-full border border-border px-4 py-2 text-sm text-slate-700"
                      >
                        Remove
                      </button>
                    ) : (
                      <div />
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addLanguage}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                + Add Language
              </button>
            </div>

            {/* RESUME UPLOAD */}
            <div className="rounded-[1.75rem] border border-border/80 bg-slate-50 p-6">
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-900">Resume / CV</p>
                <p className="text-xs text-slate-500 mt-1">Upload your resume (PDF or Word, max 5MB)</p>
              </div>

              {!resumeFile ? (
                <label
                  htmlFor="resume"
                  className="flex flex-col items-center justify-center w-full h-36 rounded-2xl border-2 border-dashed border-sky-300 bg-white cursor-pointer hover:border-sky-500 hover:bg-sky-50 transition-all"
                >
                  <UploadCloud className="w-8 h-8 text-sky-400 mb-2" />
                  <p className="text-sm font-medium text-sky-600">Click to upload resume</p>
                  <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX — max 5MB</p>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center justify-between rounded-2xl border border-green-200 bg-green-50 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{resumeFile.name}</p>
                      <p className="text-xs text-slate-500">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeResume}
                    className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center text-slate-500 hover:text-red-500 hover:border-red-300 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {resumeError && (
                <p className="mt-2 text-xs text-destructive">{resumeError}</p>
              )}
            </div>

            {/* SUBMIT */}
            <Button type="submit" className="w-full rounded-full bg-sky-600 px-6 py-4 text-sm font-semibold text-white hover:bg-sky-700">
              Submit Application
            </Button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default InternshipForm;