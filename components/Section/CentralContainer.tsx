import Link from "next/link";

export default function CentralContainer({ children }) {
  return (
    <>
      <div class="col-lg-6">{children}</div>
    </>
  );
}
