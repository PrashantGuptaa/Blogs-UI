import { Box, Button } from "@mui/material";
import { useState } from "react";
import BlogDetails from "../../Components/BlogDetails";
import TextEditor from "../../Components/TextEditor";
import VerticalLinearStepper from "../../Components/VerticalStepper";
import './addBlog.css';

const steps = ["Blog Details", "Description"]
const AddBlog = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleNext = () => {
        if (activeStep >= steps.length) {
            completeBlog();
        } else {
            setActiveStep(activeStep + 1);
        }
    }

    const handleBack = () => {
        if (activeStep <= 0) return;
        setActiveStep(activeStep - 1);
    }

    const completeBlog = () => {

    }

    const getCurrentComponent = () => {
        console.log("F-2", activeStep);
        if (activeStep === 0) {
            console.log("F-2-2", activeStep);
            return <BlogDetails />
        } else if (activeStep === 1) {
            return <TextEditor />
        }
        return null;
    }
    return ( 
        <>
        <VerticalLinearStepper 
        steps={steps}
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        />
        <div className="blog-cont">

    {getCurrentComponent()}
        </div>
    {/* <BlogDetails />  */}
        </>
     );
}
 
export default AddBlog;