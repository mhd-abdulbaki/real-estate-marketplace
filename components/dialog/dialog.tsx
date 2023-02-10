import React from "react";
import type { RootState } from "../../app";
import { useSelector, useDispatch } from "react-redux";
import { dialogHandler } from "../../features/dialog/dialogSlice";
import Carousel from "../carousel/carousel";
import { IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

const Dialog:React.FC<any> = () => {
  const router = useRouter();
  const { isOpen } = useSelector((state: RootState) => state.dialog);
  const dispatch = useDispatch();
  console.log("from DIALOOOG",router.query.flatId);
  return (
    <>
      {isOpen ? (
        <>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative">
              {/*content*/}
              <Carousel closeBtn={true} />
            </div>

          </div>
          <div  
            className="opacity-90 fixed inset-0 z-40 bg-black"
            onClick={()=>dispatch(dialogHandler(false))}>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Dialog;