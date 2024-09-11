"use client"

import { Button } from "@/components/ui/button";
import { DocsProvider } from "@/docs/context/context";
import Installation from "@/docs/pages/Installation";
import Docs from "@/docs/ui/components/Docs/Docs";
import Page from "@/docs/ui/components/Page/Page";
import Image from "next/image";

export default function Home() {
  return (
    <DocsProvider>
      <Docs>
        <Page
          title={"default"}
        >
            <Installation/>
        </Page>
        <Page
          title={"Installation"}
        >
            <p>2</p>
        </Page>
      </Docs>
    </DocsProvider>
  );
}
