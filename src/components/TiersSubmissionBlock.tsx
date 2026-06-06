"use client";

import { QRCodeSVG } from "qrcode.react";
import { IconArrowRight } from "@/components/icons";
import { useTheme } from "@/components/ThemeProvider";
import { Tier1ChallengeTimer } from "@/components/Tier1ChallengeTimer";
import {
  tiersChallenge,
  tiersSubmissionFormUrl,
} from "@/lib/tiers-challenge";

export function TiersSubmissionBlock() {
  const { resolvedTheme } = useTheme();
  const fg = resolvedTheme === "dark" ? "#f4efe8" : "#14110e";
  const bg = resolvedTheme === "dark" ? "#121010" : "#ffffff";
  const { submission } = tiersChallenge;

  return (
    <div className="tier1-submit-shell">
      <div className="tier1-submit-shell__timer" data-hover="WAIT">
        <p className="label-day mb-4">Day 1 Timer</p>
        <Tier1ChallengeTimer />
      </div>

      <div className="tier1-submit-shell__divider" aria-hidden />

      <div className="tier1-submit-shell__form">
        <p className="label-day mb-4">Submission</p>
        <h3 className="title-lg descender-safe mb-3">{submission.title}</h3>
        <p className="prose-body-sm mb-5 max-w-[460px]">{submission.intro}</p>

        <ul className="tier-submit-deliverables mb-6">
          {submission.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="tier1-submit-form-row">
          <a
            href={tiersSubmissionFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-hover="SUBMIT"
            className="tier1-qr-link"
            aria-label="Open Tier 1 and 2 submission form (QR code)"
          >
            <QRCodeSVG
              value={tiersSubmissionFormUrl}
              size={168}
              level="M"
              fgColor={fg}
              bgColor={bg}
              className="tier1-qr"
            />
            <span className="tier1-qr-caption">Scan to submit</span>
          </a>

          <div className="tier1-submit-actions">
            <a
              href={tiersSubmissionFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-hover="SUBMIT"
              className="btn-primary"
            >
              Open submission form
              <IconArrowRight className="w-4 h-4" />
            </a>
            <p className="prose-body-sm tier1-submit-url">
              <span className="text-accent font-medium">Google Form</span>
              <span className="tier1-submit-url__sep" aria-hidden>
                ·
              </span>
              {submission.portalLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
