import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import CaseIntro from "../../components/CaseIntro";
import Pipeline from "../../components/Pipeline";
import PromptWorkbench from "../../components/PromptWorkbench";
import Evaluation from "../../components/Evaluation";
import Comparison from "../../components/Comparison";
import Playground from "../../components/Playground";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CaseIntro />
        <Pipeline />
        <PromptWorkbench />
        <Evaluation />
        <Comparison />
        <Playground />
      </main>

      <Footer />
    </>
  );
}