import React, {ReactNode} from "react";
import ItemList from "@/components/shared/item-list/ItemList";

type Props = {
  children: ReactNode;
};

const conversationsLayout: React.FC<Props> = ({ children }: Props) => {
  return <>
    <ItemList title={"Conversations"}>Conversation</ItemList>
    {children}
  </>;
};

export default conversationsLayout
