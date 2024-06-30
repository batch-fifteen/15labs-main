import { useEffect } from "react";

interface DynamicTitleProps {
  tit: string;
}

export const DynamicTitle: React.FC<DynamicTitleProps> = ({ tit }) => {
  useEffect(() => {
    document.title = tit;
  }, [tit]);

  return null;
};
