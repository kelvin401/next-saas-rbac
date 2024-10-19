import { ArrowRight } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ProjectList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Projeto 01</CardTitle>
          <CardDescription className="line-clamp-3 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            neque, reprehenderit perferendis culpa praesentium ut. Blanditiis
            optio facere aut ad numquam enim voluptatum vero eum odio.
            Doloremque libero vel incidunt!
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-1.5">
          <Avatar className="size-4">
            <AvatarImage src="https://github.com/kelvin401.png" />
            <AvatarFallback />
          </Avatar>

          <span className="text-sm text-muted-foreground">
            Created by{' '}
            <span className="font-medium text-foreground">Kelvin Silva</span> a
            day ago.
          </span>

          <Button size="xs" variant="outline" className="ml-auto">
            View <ArrowRight className="ml-2 size-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
