"use client"

import { Button } from "@/components/ui/button";
import { DocsProvider } from "@/docs/context/context";
import Installation from "@/docs/pages/Installation";
import SettingsPage from "@/docs/pages/SettingsPage";
import Docs from "@/docs/ui/components/Docs/Docs";
import Page from "@/docs/ui/components/Page/Page";
import Section from "@/docs/ui/components/Section/Section";
import { useTheme } from "@/docs/utils/use-theme";
import Image from "next/image";

export default function Home() {

  useTheme()

  return (
    <DocsProvider>
      <Docs title="Docs">
        <Section 
          name="Books"
          alwaysOpen={true}
        >
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
            title={"Setup"}
          >
              <p>2</p>
          </Page>
          <Page
            title={"Settings"}
          >
              <SettingsPage/>
          </Page>
        </Section>
        <Section name="Components">
          <Page
              title={"Title"}
            >
              <p>3</p>
          </Page>
          <Page
              title={"Text"}
            >
              <p>3</p>
          </Page>
          <Page
              title={"CommandPrompt"}
            >
              <p>3</p>
          </Page>
          <Page
            title={"CodePreview"}
          >
              <p>3</p>
          </Page>
          <Page
            title={"Header"}
          >
              <p>3</p>
          </Page>
          <Page
            title={"Code"}
          >
              <p>3</p>
          </Page>
          <Page
            title={"Custom Components"}
          >
              <p>Custom Components</p>
          </Page>
        </Section>
      </Docs>
    </DocsProvider>
  );
}
