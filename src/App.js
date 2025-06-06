// // import React, { useState } from "react";
// // import { useVapiAssistant } from "./useVapiAssistant";
// // import { Button } from "./components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "./components/ui/card";
// // import { CheckCircle, Clock, Phone, Code, Bot } from "lucide-react";

// // // Dummy UI components (Button, Card, etc) if you don't have actual ones, 
// // // you can replace them with basic HTML tags or install a UI library.

// // export default function App() {
// //   // Replace with your actual Vapi keys:
// //   const VAPI_PUBLIC_KEY = "c640be3c-9a20-4084-97f1-f7c5c90eaa88";
// //   const VAPI_ASSISTANT_ID = "88a18a10-d06f-4e3c-b1da-4a791728f14a";

// //   const { startCall, stopCall } = useVapiAssistant(
// //     VAPI_PUBLIC_KEY,
// //     VAPI_ASSISTANT_ID
// //   );
// //   const [interviewStarted, setInterviewStarted] = useState(false);

// //   const handleStartInterview = () => {
// //     startCall();
// //     setInterviewStarted(true);
// //   };

// //   const handleEndInterview = () => {
// //     stopCall();
// //     setInterviewStarted(false);
// //   };

// //   const features = [
// //     {
// //       icon: Clock,
// //       title: "Duration",
// //       description: "~10 minutes",
// //     },
// //     {
// //       icon: Phone,
// //       title: "Format",
// //       description: "Phone call interview",
// //     },
// //     {
// //       icon: Bot,
// //       title: "Interviewer",
// //       description: "AI-powered assistant",
// //     },
// //   ];

// //   const pythonTopics = [
// //     "Data structures (lists, dictionaries, sets)",
// //     "Functions and lambda expressions",
// //     "Object-oriented programming concepts",
// //     "Error handling with try/except",
// //     "Common libraries (pandas, numpy, etc.)",
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
// //       <div className="w-full max-w-2xl space-y-8">
// //         {/* Header */}
// //         <div className="text-center space-y-4">
// //           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
// //             <Code className="w-8 h-8 text-white" />
// //           </div>
// //           <h1 className="text-3xl font-bold text-slate-900">
// //             Python Interview Practice
// //           </h1>
// //           <p className="text-lg text-slate-600 max-w-md mx-auto">
// //             Ready to test your Python skills? This AI-powered phone interview
// //             will help you prepare for real coding interviews.
// //           </p>
// //         </div>

// //         {/* Main Card */}
// //         <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
// //           <CardHeader className="text-center pb-6">
// //             <CardTitle className="text-xl text-slate-800">Interview Details</CardTitle>
// //             <CardDescription className="text-slate-600">
// //               A 10-minute Python coding interview via phone call with an AI
// //               interviewer
// //             </CardDescription>
// //           </CardHeader>

// //           <CardContent className="space-y-8">
// //             {/* Features Grid */}
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //               {features.map((feature, index) => (
// //                 <div
// //                   key={index}
// //                   className="text-center p-4 rounded-lg bg-slate-50"
// //                 >
// //                   <feature.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
// //                   <h3 className="font-semibold text-slate-800 text-sm">
// //                     {feature.title}
// //                   </h3>
// //                   <p className="text-xs text-slate-600 mt-1">
// //                     {feature.description}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Python Topics */}
// //             <div className="space-y-4">
// //               <h3 className="font-semibold text-slate-800 flex items-center gap-2">
// //                 <CheckCircle className="w-5 h-5 text-green-600" />
// //                 Potential Python Topics
// //               </h3>
// //               <div className="space-y-2">
// //                 {pythonTopics.map((item, index) => (
// //                   <div key={index} className="flex items-start gap-3 text-sm">
// //                     <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
// //                     <span className="text-slate-700">{item}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Preparation Tips */}
// //             <div className="bg-blue-50 p-4 rounded-lg">
// //               <h3 className="font-semibold text-blue-800 mb-2 text-sm">
// //                 Preparation Tips
// //               </h3>
// //               <ul className="text-xs text-blue-700 space-y-1">
// //                 <li>• Find a quiet environment with good phone reception</li>
// //                 <li>• Have a pen and paper ready for notes</li>
// //                 <li>• Speak clearly and think through problems out loud</li>
// //                 <li>• Ask clarifying questions when needed</li>
// //               </ul>
// //             </div>

// //             {/* Start / End Button */}
// //             <div className="pt-6 border-t border-slate-200 space-y-4">
// //               {!interviewStarted ? (
// //                 <Button
// //                   onClick={handleStartInterview}
// //                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
// //                   size="lg"
// //                 >
// //                   Start Python Interview
// //                 </Button>
// //               ) : (
// //                 <Button
// //                   onClick={handleEndInterview}
// //                   className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
// //                   size="lg"
// //                 >
// //                   End Interview
// //                 </Button>
// //               )}

// //               <p className="text-xs text-slate-500 text-center mt-3">
// //                 This is a practice interview for self-training purposes
// //               </p>
// //             </div>
// //           </CardContent>
// //         </Card>

// //         {/* Footer */}
// //         <div className="text-center text-sm text-slate-500">
// //           <p>Practice makes perfect! You can retake this interview as many times as you want.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react"
// import { Button } from "./components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
// import { CheckCircle, Clock, Phone, Code, Bot } from "lucide-react"

// export default function App() {
//   const handleStartInterview = () => {
//     window.location.href = "https://your-python-interview-platform.com/call"
//   }

//   const features = [
//     {
//       icon: Clock,
//       title: "Duration",
//       description: "~10 minutes",
//     },
//     {
//       icon: Phone,
//       title: "Format",
//       description: "Phone call interview",
//     },
//     {
//       icon: Bot,
//       title: "Interviewer",
//       description: "AI-powered assistant",
//     },
//   ]

//   const pythonTopics = [
//     "Data structures (lists, dictionaries, sets)",
//     "Functions and lambda expressions",
//     "Object-oriented programming concepts",
//     "Error handling with try/except",
//     "Common libraries (pandas, numpy, etc.)",
//   ]

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(to bottom right, #f8fafc, #e2e8f0)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "16px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <div style={{ maxWidth: "600px", width: "100%" }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "24px" }}>
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "64px",
//               height: "64px",
//               backgroundColor: "#2563eb",
//               borderRadius: "9999px",
//               marginBottom: "16px",
//             }}
//           >
//             <Code style={{ width: "32px", height: "32px", color: "white" }} />
//           </div>
//           <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1e293b" }}>
//             Python Interview Practice
//           </h1>
//           <p style={{ fontSize: "1.125rem", color: "#475569", maxWidth: "400px", margin: "auto" }}>
//             Ready to test your Python skills? This AI-powered phone interview will help you prepare for real coding
//             interviews.
//           </p>
//         </div>

//         {/* Main Card */}
//         <Card>
//           <CardHeader style={{ textAlign: "center", paddingBottom: "24px" }}>
//             <CardTitle style={{ fontSize: "1.25rem", color: "#334155" }}>Interview Details</CardTitle>
//             <CardDescription style={{ color: "#64748b" }}>
//               A 10-minute Python coding interview via phone call with an AI interviewer
//             </CardDescription>
//           </CardHeader>

//           <CardContent style={{ gap: "32px" }}>
//             {/* Features Grid */}
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
//                 gap: "16px",
//                 marginBottom: "24px",
//               }}
//             >
//               {features.map((feature, index) => {
//                 const Icon = feature.icon
//                 return (
//                   <div
//                     key={index}
//                     style={{
//                       textAlign: "center",
//                       padding: "16px",
//                       borderRadius: "12px",
//                       backgroundColor: "#f1f5f9",
//                     }}
//                   >
//                     <Icon style={{ width: "24px", height: "24px", color: "#2563eb", marginBottom: "8px" }} />
//                     <h3 style={{ fontWeight: "600", color: "#334155", fontSize: "0.875rem" }}>{feature.title}</h3>
//                     <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>{feature.description}</p>
//                   </div>
//                 )
//               })}
//             </div>

//             {/* Python Topics */}
//             <div style={{ marginBottom: "24px" }}>
//               <h3
//                 style={{
//                   fontWeight: "600",
//                   color: "#166534",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   fontSize: "1rem",
//                   marginBottom: "8px",
//                 }}
//               >
//                 <CheckCircle style={{ width: "20px", height: "20px" }} />
//                 Potential Python Topics
//               </h3>
//               <div>
//                 {pythonTopics.map((item, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       display: "flex",
//                       alignItems: "flex-start",
//                       gap: "12px",
//                       fontSize: "0.875rem",
//                       color: "#334155",
//                       marginBottom: "8px",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "8px",
//                         height: "8px",
//                         backgroundColor: "#2563eb",
//                         borderRadius: "9999px",
//                         marginTop: "6px",
//                         flexShrink: 0,
//                       }}
//                     />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Preparation Tips */}
//             <div
//               style={{
//                 backgroundColor: "#dbf4ff",
//                 padding: "16px",
//                 borderRadius: "12px",
//                 color: "#0369a1",
//                 fontSize: "0.875rem",
//                 marginBottom: "24px",
//               }}
//             >
//               <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>Preparation Tips</h3>
//               <ul style={{ marginLeft: "20px" }}>
//                 <li>• Find a quiet environment with good phone reception</li>
//                 <li>• Have a pen and paper ready for notes</li>
//                 <li>• Speak clearly and think through problems out loud</li>
//                 <li>• Ask clarifying questions when needed</li>
//               </ul>
//             </div>

//             {/* Start Button */}
//             <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "24px" }}>
//               <Button onClick={handleStartInterview} size="lg" style={{ width: "100%" }}>
//                 Start Python Interview
//               </Button>
//               <p style={{ fontSize: "0.75rem", color: "#94a3b8", textAlign: "center", marginTop: "12px" }}>
//                 This is a practice interview for self-training purposes
//               </p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Footer */}
//         <div style={{ textAlign: "center", fontSize: "0.75rem", color: "#64748b", marginTop: "24px" }}>
//           <p>Practice makes perfect! You can retake this interview as many times as you want.</p>
//         </div>
//       </div>
//     </div>
//   )
// }














// import React, { useState } from "react";
// import { useVapiAssistant } from "./useVapiAssistant";
// import { Button } from "./components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./components/ui/card";
// import { CheckCircle, Clock, Phone, Code, Bot } from "lucide-react";

// // Dummy UI components (Button, Card, etc) if you don't have actual ones, 
// // you can replace them with basic HTML tags or install a UI library.

// export default function App() {
//   // Replace with your actual Vapi keys:
//   const VAPI_PUBLIC_KEY = "c640be3c-9a20-4084-97f1-f7c5c90eaa88";
//   const VAPI_ASSISTANT_ID = "88a18a10-d06f-4e3c-b1da-4a791728f14a";

//   const { startCall, stopCall } = useVapiAssistant(
//     VAPI_PUBLIC_KEY,
//     VAPI_ASSISTANT_ID
//   );
//   const [interviewStarted, setInterviewStarted] = useState(false);

//   const handleStartInterview = () => {
//     startCall();
//     setInterviewStarted(true);
//   };

//   const handleEndInterview = () => {
//     stopCall();
//     setInterviewStarted(false);
//   };

//   const features = [
//     {
//       icon: Clock,
//       title: "Duration",
//       description: "~10 minutes",
//     },
//     {
//       icon: Phone,
//       title: "Format",
//       description: "Phone call interview",
//     },
//     {
//       icon: Bot,
//       title: "Interviewer",
//       description: "AI-powered assistant",
//     },
//   ];

//   const pythonTopics = [
//     "Data structures (lists, dictionaries, sets)",
//     "Functions and lambda expressions",
//     "Object-oriented programming concepts",
//     "Error handling with try/except",
//     "Common libraries (pandas, numpy, etc.)",
//   ];

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(to bottom right, #f8fafc, #e2e8f0)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "16px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <div style={{ width: "100%", maxWidth: "768px", display: "flex", flexDirection: "column", gap: "32px" }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "16px" }}>
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "64px",
//               height: "64px",
//               backgroundColor: "#2563eb",
//               borderRadius: "9999px",
//               marginBottom: "16px",
//             }}
//           >
//             <Code style={{ width: "32px", height: "32px", color: "white" }} />
//           </div>
//           <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#0f172a" }}>
//             Python Interview Practice
//           </h1>
//           <p style={{ fontSize: "1.125rem", color: "#64748b", maxWidth: "400px", margin: "0 auto" }}>
//             Ready to test your Python skills? This AI-powered phone interview will help you prepare for real coding interviews.
//           </p>
//         </div>

//         {/* Main Card */}
//         <Card
//           style={{
//             backgroundColor: "rgba(255, 255, 255, 0.8)",
//             boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
//             borderRadius: "12px",
//             border: "none",
//             backdropFilter: "blur(8px)",
//           }}
//         >
//           <CardHeader style={{ textAlign: "center", paddingBottom: "24px" }}>
//             <CardTitle style={{ fontSize: "1.25rem", color: "#334155" }}>
//               Interview Details
//             </CardTitle>
//             <CardDescription style={{ color: "#64748b" }}>
//               A 10-minute Python coding interview via phone call with an AI interviewer
//             </CardDescription>
//           </CardHeader>

//           <CardContent style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
//             {/* Features Grid */}
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(3, 1fr)",
//                 gap: "16px",
//               }}
//             >
//               {features.map((feature, index) => {
//                 const Icon = feature.icon
//                 return (
//                   <div
//                     key={index}
//                     style={{
//                       textAlign: "center",
//                       padding: "16px",
//                       borderRadius: "12px",
//                       backgroundColor: "#f1f5f9",
//                     }}
//                   >
//                     <Icon style={{ width: "24px", height: "24px", color: "#2563eb", marginBottom: "8px" }} />
//                     <h3 style={{ fontWeight: "600", color: "#334155", fontSize: "0.875rem" }}>
//                       {feature.title}
//                     </h3>
//                     <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>
//                       {feature.description}
//                     </p>
//                   </div>
//                 )
//               })}
//             </div>

//             {/* Python Topics */}
//             <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//               <h3
//                 style={{
//                   fontWeight: "600",
//                   color: "#166534",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   fontSize: "1rem",
//                 }}
//               >
//                 <CheckCircle style={{ width: "20px", height: "20px", color: "#16a34a" }} />
//                 Potential Python Topics
//               </h3>
//               <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//                 {pythonTopics.map((item, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       display: "flex",
//                       alignItems: "flex-start",
//                       gap: "12px",
//                       fontSize: "0.875rem",
//                       color: "#334155",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "8px",
//                         height: "8px",
//                         backgroundColor: "#2563eb",
//                         borderRadius: "9999px",
//                         marginTop: "6px",
//                         flexShrink: 0,
//                       }}
//                     />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Preparation Tips */}
//             <div
//               style={{
//                 backgroundColor: "#dbf4ff",
//                 padding: "16px",
//                 borderRadius: "12px",
//                 color: "#0369a1",
//                 fontSize: "0.875rem",
//               }}
//             >
//               <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>
//                 Preparation Tips
//               </h3>
//               <ul style={{ marginLeft: "20px" }}>
//                 <li>• Find a quiet environment with good phone reception</li>
//                 <li>• Have a pen and paper ready for notes</li>
//                 <li>• Speak clearly and think through problems out loud</li>
//                 <li>• Ask clarifying questions when needed</li>
//               </ul>
//             </div>

//             {/* Start / End Button */}
//             <div
//               style={{
//                 paddingTop: "24px",
//                 borderTop: "1px solid #e2e8f0",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "16px",
//               }}
//             >
//               {!interviewStarted ? (
//                 <Button
//                   onClick={handleStartInterview}
//                   style={{
//                     width: "100%",
//                     backgroundColor: "#2563eb",
//                     color: "white",
//                     fontWeight: "600",
//                     padding: "12px 24px",
//                     borderRadius: "12px",
//                     cursor: "pointer",
//                     border: "none",
//                   }}
//                   size="lg"
//                 >
//                   Start Python Interview
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={handleEndInterview}
//                   style={{
//                     width: "100%",
//                     backgroundColor: "#dc2626",
//                     color: "white",
//                     fontWeight: "600",
//                     padding: "12px 24px",
//                     borderRadius: "12px",
//                     cursor: "pointer",
//                     border: "none",
//                   }}
//                   size="lg"
//                 >
//                   End Interview
//                 </Button>
//               )}
//               <p
//                 style={{
//                   fontSize: "0.75rem",
//                   color: "#64748b",
//                   textAlign: "center",
//                   marginTop: "12px",
//                 }}
//               >
//                 This is a practice interview for self-training purposes
//               </p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Footer */}
//         <div
//           style={{
//             textAlign: "center",
//             fontSize: "0.75rem",
//             color: "#64748b",
//             marginTop: "32px",
//           }}
//         >
//           <p>Practice makes perfect! You can retake this interview as many times as you want.</p>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client"

import { useState } from "react"
import { useVapiAssistant } from "./useVapiAssistant"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { CheckCircle, Clock, Phone, Users, Bot } from "lucide-react"

// Dummy UI components (Button, Card, etc) if you don't have actual ones,
// you can replace them with basic HTML tags or install a UI library.

export default function App() {
  // Replace with your actual Vapi keys:
  const VAPI_PUBLIC_KEY = "c640be3c-9a20-4084-97f1-f7c5c90eaa88"
  const VAPI_ASSISTANT_ID = "88a18a10-d06f-4e3c-b1da-4a791728f14a"

  const { startCall, stopCall } = useVapiAssistant(VAPI_PUBLIC_KEY, VAPI_ASSISTANT_ID)
  const [callStarted, setCallStarted] = useState(false)

  const handleStartCall = () => {
    startCall()
    setCallStarted(true)
  }

  const handleEndCall = () => {
    stopCall()
    setCallStarted(false)
  }

  const features = [
    {
      icon: Clock,
      title: "Duration",
      description: "~10 minutes",
    },
    {
      icon: Phone,
      title: "Format",
      description: "Voice conversation",
    },
    {
      icon: Bot,
      title: "Assistant",
      description: "Morgan, AI agent",
    },
  ]

  const businessSolutions = [
    "OperationsOS for streamlining business processes",
    "InsightAnalytics for data-driven decision making",
    "CustomerConnect for enhanced client relationships",
    "Growth strategy consulting services",
    "Digital transformation solutions",
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f8fafc, #e2e8f0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: "768px", display: "flex", flexDirection: "column", gap: "32px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              backgroundColor: "#2563eb",
              borderRadius: "9999px",
              marginBottom: "16px",
            }}
          >
            <Users style={{ width: "32px", height: "32px", color: "white" }} />
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#0f172a" }}>
            Meet Morgan, Your Business Development Assistant
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#64748b", maxWidth: "400px", margin: "0 auto" }}>
            Connect with our AI-powered business development assistant to discuss your business challenges and explore
            solutions.
          </p>
        </div>

        {/* Main Card */}
        <Card
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            border: "none",
            backdropFilter: "blur(8px)",
          }}
        >
          <CardHeader style={{ textAlign: "center", paddingBottom: "24px" }}>
            <CardTitle style={{ fontSize: "1.25rem", color: "#334155" }}>Lead Qualification & Nurturing</CardTitle>
            <CardDescription style={{ color: "#64748b" }}>
              A personalized conversation to understand your business needs and connect you with tailored solutions
            </CardDescription>
          </CardHeader>

          <CardContent style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Features Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    style={{
                      textAlign: "center",
                      padding: "16px",
                      borderRadius: "12px",
                      backgroundColor: "#f1f5f9",
                    }}
                  >
                    <Icon style={{ width: "24px", height: "24px", color: "#2563eb", marginBottom: "8px" }} />
                    <h3 style={{ fontWeight: "600", color: "#334155", fontSize: "0.875rem" }}>{feature.title}</h3>
                    <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "4px" }}>{feature.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Business Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3
                style={{
                  fontWeight: "600",
                  color: "#166534",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "1rem",
                }}
              >
                <CheckCircle style={{ width: "20px", height: "20px", color: "#16a34a" }} />
                GrowthPartners Solutions
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {businessSolutions.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "0.875rem",
                      color: "#334155",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#2563eb",
                        borderRadius: "9999px",
                        marginTop: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div
              style={{
                backgroundColor: "#dbf4ff",
                padding: "16px",
                borderRadius: "12px",
                color: "#0369a1",
                fontSize: "0.875rem",
              }}
            >
              <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>Benefits of Speaking with Morgan</h3>
              <ul style={{ marginLeft: "20px" }}>
                <li>• Personalized assessment of your business challenges</li>
                <li>• Expert matching with the right GrowthPartners solutions</li>
                <li>• Time-efficient qualification process</li>
                <li>• Direct connection to specialized sales representatives</li>
              </ul>
            </div>

            {/* Start / End Button */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {!callStarted ? (
                <Button
                  onClick={handleStartCall}
                  style={{
                    width: "100%",
                    backgroundColor: "#2563eb",
                    color: "white",
                    fontWeight: "600",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    border: "none",
                  }}
                  size="lg"
                >
                  Speak with Morgan
                </Button>
              ) : (
                <Button
                  onClick={handleEndCall}
                  style={{
                    width: "100%",
                    backgroundColor: "#dc2626",
                    color: "white",
                    fontWeight: "600",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    border: "none",
                  }}
                  size="lg"
                >
                  End Conversation
                </Button>
              )}
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#64748b",
                  textAlign: "center",
                  marginTop: "12px",
                }}
              >
                Your information will be used to provide tailored business solutions
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            color: "#64748b",
            marginTop: "32px",
          }}
        >
          <p>Morgan is here to help streamline your path to the right GrowthPartners solutions.</p>
        </div>
      </div>
    </div>
  )
}
