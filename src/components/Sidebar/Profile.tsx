import { LogOut } from "lucide-react"
import { Button } from "../Button"

export function Profile() {
  return(
    <div className="flex items-center gap-3">
      <img 
        src="https://github.com/isadoraguiar.png"
        className="w-10 h-10 rounded-full" 
        alt="Imagem de perfil" 
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Isadora Aguiar
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">isadora@rocketseat.com.br</span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5" />
      </Button>
    </div>
  )
}