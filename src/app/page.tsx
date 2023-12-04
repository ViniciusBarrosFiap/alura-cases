import Header from "@/components/Header/Header"
import Link from "next/link"

export default function Home() {
  return (
   <div>
      <Header/>
      <Link href="/faq">Ir para o FAQ</Link>
      <Link href="/produtos">Ir para Produtos</Link>
   </div>
  )
}
