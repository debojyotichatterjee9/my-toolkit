const UuidGeneratorLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="md:container md:mx-auto">{children}</div>;
};

export default UuidGeneratorLayout;
