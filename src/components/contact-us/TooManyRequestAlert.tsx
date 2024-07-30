import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";

interface TooManyRequestAlertProps {
  open: boolean;
  onClose: () => void;
}

const TooManyRequestAlert: React.FC<TooManyRequestAlertProps> = ({
  open,
  onClose,
}) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <Alert
      open={open}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 max-w-screen-md bg-red-600 z-50"
      icon={<FontAwesomeIcon icon={faTriangleExclamation} size="lg" />}
      onClose={onClose}
    >
      <Typography
        variant="h5"
        color="white"
        className=""
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Too Many Requests
      </Typography>
      <Typography
        variant="paragraph"
        color="white"
        className="mt-2 font-normal"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        You have made too many requests in a short period. Please try again
        later.
      </Typography>
    </Alert>
  );
};

export default TooManyRequestAlert;
