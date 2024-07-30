import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Typography } from "@material-tailwind/react";

import React, { useEffect } from "react";

interface SuccessAlertProps {
  open: boolean;
  onClose: () => void;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ open, onClose }) => {
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
      className="fixed top-4 left-1/2 transform -translate-x-1/2 max-w-screen-md bg-green-500 z-50"
      icon={<FontAwesomeIcon icon={faCircleCheck} size="lg" />}
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
        Success
      </Typography>
      <Typography
        variant="paragraph"
        color="white"
        className="mt-2 font-normal"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Successfully send message to 15Labs
      </Typography>
    </Alert>
  );
};

export default SuccessAlert;
