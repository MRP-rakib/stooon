"use client";
import CartPrice from "@/component/CartPrice";
import CartTable from "@/component/CartTable";
import Container from "@/ui/Container";
import Instagram from "@/ui/Instagram";
import PageTopSection from "@/ui/PageTopSection";
import { usePathname } from "next/navigation";
import React from "react";

function Cartpage() {
  const pathName = usePathname();
  return (
    <div className="">
      <PageTopSection pageName="cart" CurrentPageLocation={pathName} />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px]  gap-5 items-start mt-10 lg:mt-15">
          
          <CartTable/>
          <CartPrice/>
          
        </div>
      </Container>
      <Instagram />
    </div>
  );
}

export default Cartpage;
