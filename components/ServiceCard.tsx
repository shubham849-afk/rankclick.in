type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200 transition hover:-translate-y-1 hover:shadow-orange-200">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-100 text-3xl text-orange-600">
        {icon}
      </div>
      <h3 className="mb-3 text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </article>
  );
}
