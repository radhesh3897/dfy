import { permanentRedirect } from "next/navigation";

export default function GetFreeLeadQualityAuditRedirect() {
  permanentRedirect("/#free-audit-form");
}
