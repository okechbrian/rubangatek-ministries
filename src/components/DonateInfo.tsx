import { donationInfo } from "@/lib/constants";

export default function DonateInfo() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-secondary/50 shadow-sm overflow-hidden">
        <div className="bg-primary px-6 py-4">
          <h2 className="font-heading font-bold text-white text-xl">
            Bank Transfer Details
          </h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-secondary/30">
            <span className="font-semibold text-text-primary text-sm">Bank</span>
            <span className="text-text-muted text-sm">{donationInfo.bank}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-secondary/30">
            <span className="font-semibold text-text-primary text-sm">Account Name</span>
            <span className="text-text-muted text-sm font-medium">{donationInfo.accountName}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-secondary/30">
            <span className="font-semibold text-text-primary text-sm">Account Number</span>
            <span className="text-primary font-bold text-lg font-mono tracking-wider">
              {donationInfo.accountNumber}
            </span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="font-semibold text-text-primary text-sm">Phone Contacts</span>
            <div className="text-right">
              {donationInfo.phoneContacts.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="block text-text-muted hover:text-primary text-sm transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-secondary/50 shadow-sm overflow-hidden">
        <div className="bg-accent px-6 py-4">
          <h2 className="font-heading font-bold text-white text-xl">
            Mobile Money
          </h2>
        </div>
        <div className="p-6 space-y-4">
          {donationInfo.mobileMoney.map((mm) => (
            <div key={mm.network} className="flex justify-between items-center py-3 border-b border-secondary/30 last:border-b-0">
              <div>
                <span className="font-semibold text-text-primary text-sm block">{mm.network}</span>
                <span className="text-text-muted text-xs">{mm.label}</span>
              </div>
              <a
                href={`tel:${mm.number}`}
                className="text-primary font-bold text-base font-mono tracking-wider hover:text-primary-dark transition-colors"
              >
                {mm.number}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
