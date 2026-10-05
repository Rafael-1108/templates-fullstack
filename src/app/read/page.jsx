import Series from "@/components/SeriesListLinkSSR";
import { Skeleton } from "antd";
import { Suspense } from "react"; 

export default function ReadPage() {
  return (
    <main>
      <h2>GET - Read</h2>
      <p>O servidor chama a API com api-key privada; o Skeleton aparece até que as séries cheguem usando a tag nativa do React (Suspense).</p>
      <p>Abra o DevTools - Network: a chamada à API não aparece. Clique numa série para buscá-la pelo ID.</p>
    
      <Suspense
        fallback={
          <div className="skeleton">
            <Skeleton active />
          </div>
        }
      >
        <Series />
      </Suspense>
    </main>
  );
}