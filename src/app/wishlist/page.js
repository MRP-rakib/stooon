"use client";
import CartPrice from "@/component/CartPrice";
import CartTable from "@/component/CartTable";
import Container from "@/ui/Container";
import Instagram from "@/ui/Instagram";
import PageTopSection from "@/ui/PageTopSection";
import { usePathname } from "next/navigation";
import React from "react";

function WishListPage() {
  const pathName = usePathname();
  return (
    <div>
      <PageTopSection pageName="Wishlist" CurrentPageLocation={pathName} />
      <Container>
        <div className="mt-10 lg:mt-15">
          <CartTable />
          
        </div>
      </Container>
      <Instagram />
    </div>
  );
}

export default WishListPage;
