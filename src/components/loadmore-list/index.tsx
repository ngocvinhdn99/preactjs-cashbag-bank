import { Fragment, h } from "preact";
import { useRef } from "preact/hooks";
import { RcLoading } from "..";

interface Props {
  loading?: boolean;
  onLoadMore: () => void;
  shouldLoadMore: boolean;
  children: any;
}
const AppLoadMoreList = ({
  loading,
  shouldLoadMore,
  onLoadMore,
  children,
}: Props) => {
  const observer = useRef<any>();
  const lastItemRef = (node) => {
    if (loading || !shouldLoadMore) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onLoadMore?.();
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <Fragment>
      {children}
      <div ref={lastItemRef} />
      {shouldLoadMore && (
        <div className="w-100 mt-2 text-center">
          {(shouldLoadMore || loading) && <RcLoading />}
        </div>
      )}
    </Fragment>
  );
};
export default AppLoadMoreList;
