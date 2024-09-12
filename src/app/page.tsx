"use client"

import { Button } from "@/components/ui/button";
import { DocsProvider } from "@/docs/context/context";
import Installation from "@/docs/pages/Installation";
import Docs from "@/docs/ui/components/Docs/Docs";
import Page from "@/docs/ui/components/Page/Page";
import Section from "@/docs/ui/components/Section/Section";
import Image from "next/image";

export default function Home() {
  return (
    <DocsProvider>
      <Docs>
        <Section name="Books">
          <Page
            title={"Get Started"}
          >
              <Installation/>
          </Page>
          <Page
            title={"Installation"}
          >
              <p>2</p>
          </Page>
          <Page
            title={"Installation2"}
          >
              <p>2</p>
          </Page>
        </Section>
        <Page
            title={"Test"}
          >
            <p>3</p>
        </Page>
      </Docs>
    </DocsProvider>
  );
}
