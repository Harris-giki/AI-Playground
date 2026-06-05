import type { TierChallenge } from "@/lib/event-details";

type Props = {
  tier: TierChallenge;
};

export function TierChallengeRow({ tier }: Props) {
  return (
    <div className="stage-row" data-hover={tier.hover}>
      <div className="stage-index" aria-hidden>
        {tier.id}
      </div>
      <div>
        <div className="tier-row__meta mb-2">
          <p className="label-stage mb-0">Tier {tier.id}</p>
          <span className="meta-tag">{tier.day}</span>
          <span className="meta-tag">{tier.format}</span>
        </div>
        <h3 className="title-lg descender-safe mb-[0.7rem]">{tier.name}</h3>
        <p className="prose-body-sm max-w-[560px] mb-[1.8rem]">{tier.desc}</p>
        <div className="flex gap-2 flex-wrap">
          {tier.pills.map((pill) => (
            <span key={pill} className="meta-tag">
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
