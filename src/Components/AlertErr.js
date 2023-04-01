import React from "react";
import { Alert, Button } from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
 
export default function AlertErr() {
  const [show, setShow] = React.useState(true);
  
 
return (
 <div className="pb-5">
<React.Fragment>
  <Alert
    show={show}
    color="red"
    icon={<ExclamationTriangleIcon className="h-6 w-6" />}
    dismissible={{
      onClose: () => setShow(false),
      action: (
        <Button variant="text" color="white" size="sm">
          Close
        </Button>
      ),
    }}
  >
    Sorry, something went wrong please try again.
  </Alert>
</React.Fragment>
</div>
); }
 