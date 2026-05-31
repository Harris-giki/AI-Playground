import { ScrollReveal } from "@/components/ScrollReveal";
import { prizePoolTotal } from "@/lib/site";

export function PrizePoolSection() {
  const [, amount] = prizePoolTotal.split("$");

  return (
    <section
      data-scroll-section
      className="prize-section px-6 sm:px-12 py-16 sm:py-24"
      aria-labelledby="prize-pool-heading"
    >
      <div className="prize-section__inner mx-auto max-w-[1200px] text-center">
        <ScrollReveal>
          <span className="label-eyebrow prize-section__eyebrow justify-center">
            Prize Pool
          </span>

          <h2 id="prize-pool-heading" className="prize-section__num">
            <span className="prize-section__num-solid">$</span>
            <span className="prize-section__num-outline">{amount}</span>
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
