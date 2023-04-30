import Link from "next/link";

export default function SectionContainer({ children }) {
  return (
    <>
      <div class="col-lg-3">{children}</div>
    </>
  );
}
