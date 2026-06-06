"use client";

function RollDigit({ value }: { value: number }) {
  const digit = Math.min(9, Math.max(0, value));
  return (
    <span className="cd-dgt" aria-hidden>
      <span
        className="cd-rl"
        style={{ transform: `translate3d(0, ${-digit}em, 0)` }}
      >
        {Array.from({ length: 10 }, (_, n) => (
          <span key={n}>{n}</span>
        ))}
      </span>
    </span>
  );
}

function RollPair({ value }: { value: number }) {
  const clamped = Math.min(99, Math.max(0, value));
  const text = String(clamped).padStart(2, "0");
  return (
    <span className="cd-num">
      <span className="sr-only">{text}</span>
      <RollDigit value={Number(text[0])} />
      <RollDigit value={Number(text[1])} />
    </span>
  );
}

type Props = {
  hours?: number;
};

/** Static 4-hour display — does not count down until started manually later. */
export function Tier1ChallengeTimer({ hours = 4 }: Props) {
  const units = [
    { value: hours, label: "Hrs" },
    { value: 0, label: "Min" },
    { value: 0, label: "Sec" },
  ];

  return (
    <div className="tier1-timer tier1-timer--idle" aria-live="polite">
      <p className="tier1-timer__status">
        <span className="tier1-timer__dot" aria-hidden />
        Starting soon
      </p>
      <div className="cd-clock cd-clock--wrap tier1-timer__clock">
        {units.map((unit) => (
          <div key={unit.label} className="cd-unit">
            <RollPair value={unit.value} />
            <span className="cd-key">{unit.label}</span>
          </div>
        ))}
      </div>
      <p className="tier1-timer__hint prose-body-sm">
        {hours}-hour challenge window · timer not started yet
      </p>
    </div>
  );
}
