import {useState} from "react";

const useError = () => {
  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState([]);

  const getError = (key) => {
    return (errors[key] !== undefined) ? errors[key] : false;
  }

  const handleError = (res) => {
    setFeedback('')
    if (res !== undefined) {
      switch (res.status) {
        case 422:
          setErrors(res.data.errors)
          break;
        default:
          if(res.data !== undefined) setFeedback(res.data.message)
          break;
      }
    }
  }

  return {
    getError,
    setErrors,
    handleError,
    feedback,
    setFeedback
  }
}

export default useError;
