"use client";

import { QRCodeSVG } from "qrcode.react";
import { IconArrowRight } from "@/components/icons";
import { useTheme } from "@/components/ThemeProvider";
import {
  tier3Challenge,
  tier3CreditClaimFormUrl,
} from "@/lib/tier3-challenge";

export function Tier3CreditClaimBlock() {
  const { resolvedTheme } = useTheme();
  const fg = resolvedTheme === "dark" ? "#f4efe8" : "#14110e";
  const bg = resolvedTheme === "dark" ? "#121010" : "#ffffff";
  const creditClaim = tier3Challenge.creditClaim;

  return (
    <div className="tier1-submit-shell tier1-submit-shell--form-only mt-10">
      <div className="tier1-submit-shell__form">
        <p className="label-day mb-4">First step</p>
        <h3 className="title-lg descender-safe mb-3">{creditClaim.title}</h3>
        <p className="prose-body-sm mb-5 max-w-[520px]">{creditClaim.intro}</p>

        <ul className="tier-submit-deliverables mb-6">
          {creditClaim.fields.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="tier1-submit-form-row">
          <a
            href={tier3CreditClaimFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-hover="CLAIM"
            className="tier1-qr-link"
            aria-label="Open credit claim form (QR code)"
          >
            <QRCodeSVG
              value={tier3CreditClaimFormUrl}
              size={168}
              level="M"
              fgColor={fg}
              bgColor={bg}
              className="tier1-qr"
            />
            <span className="tier1-qr-caption">Scan to claim</span>
          </a>

          <div className="tier1-submit-actions">
            <a
              href={tier3CreditClaimFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-hover="CLAIM"
              className="btn-primary"
            >
              Open credit claim form
              <IconArrowRight className="w-4 h-4" />
            </a>
            <p className="prose-body-sm tier1-submit-url">
              <span className="text-accent font-medium">Google Form</span>
              <span className="tier1-submit-url__sep" aria-hidden>
                ·
              </span>
              {creditClaim.portalLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
