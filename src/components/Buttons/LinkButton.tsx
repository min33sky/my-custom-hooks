/**
 * ## Link Button
 * 링크 버튼 컴포넌트
 * @param url 링크 URL
 */
function LinkButton({ url }: { url: string }) {
  return (
    <a
      className="link"
      href={`https://github.com/min33sky/my-custom-hooks/blob/main/src/hooks/${url}.ts`}
      target="_blank"
      rel="noreferrer"
    >
      View Code
    </a>
  );
}

export default LinkButton;
