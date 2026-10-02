export default function Logo({ size = 40 }) {
  return <img src="/logo.png" width={size} height={size} alt="Multilateral Affairs Platform logo" style={{ objectFit: "contain" }} />;
}
