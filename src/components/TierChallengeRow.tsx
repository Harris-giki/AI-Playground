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
        {tier.tracks?.length ? (
          <div className="prose-body-sm max-w-[560px] tier-row__desc">
            {tier.descLead ? <p className="mb-2">{tier.descLead}</p> : null}
            <ul className="tier-row__tracks">
              {tier.tracks.map((track) => (
                <li key={track}>{track}</li>
              ))}
            </ul>
            <p className="mb-0">{tier.desc}</p>
          </div>
        ) : (
          <p className="prose-body-sm max-w-[560px]">{tier.desc}</p>
        )}
      </div>
    </div>
  );
}
