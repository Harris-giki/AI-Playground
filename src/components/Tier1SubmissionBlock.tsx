"use client";

import { QRCodeSVG } from "qrcode.react";
import { IconArrowRight } from "@/components/icons";
import { useTheme } from "@/components/ThemeProvider";
import { Tier1ChallengeTimer } from "@/components/Tier1ChallengeTimer";
import {
  tier1ChallengeDurationHours,
  tier1SubmissionFormUrl,
} from "@/lib/tier1-challenge";

export function Tier1SubmissionBlock() {
  const { resolvedTheme } = useTheme();
  const fg = resolvedTheme === "dark" ? "#f4efe8" : "#14110e";
  const bg = resolvedTheme === "dark" ? "#121010" : "#ffffff";

  return (
    <div className="tier1-submit-shell">
      <div className="tier1-submit-shell__timer" data-hover="WAIT">
        <p className="label-day mb-4">Challenge Timer</p>
        <Tier1ChallengeTimer hours={tier1ChallengeDurationHours} />
      </div>

      <div className="tier1-submit-shell__divider" aria-hidden />

      <div className="tier1-submit-shell__form">
        <p className="label-day mb-4">Submission</p>
        <h3 className="title-lg descender-safe mb-3">Submit your concept</h3>
        <p className="prose-body-sm mb-6 max-w-[420px]">
          When your storyboard and pitch are ready, submit through the Google Form
          — on your phone via QR or on desktop via the link below.
        </p>

        <div className="tier1-submit-form-row">
          <a
            href={tier1SubmissionFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-hover="SUBMIT"
            className="tier1-qr-link"
            aria-label="Open Tier 1 submission form (QR code)"
          >
            <QRCodeSVG
              value={tier1SubmissionFormUrl}
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
              href={tier1SubmissionFormUrl}
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
              Tier 1 portal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
