import { usePathname } from 'next/navigation';

export const useNavigationVisibility = (pathsToHide: string[]) => {
  const pathname = usePathname();
  const path = pathname.split("/");
  const navigator = path[path.length - 1];

  const isVisible = pathsToHide.some((p) => navigator.includes(p));

  return { isVisible, pathname };
};
