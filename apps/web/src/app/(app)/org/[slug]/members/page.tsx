import { ability } from '@/auth/auth'

import { Invites } from './invites'
import { MemberList } from './member-list'

export default async function MembersPage() {
  const permissons = await ability()

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Members</h1>

      <div className="sapcey-y-4">
        {permissons?.can('get', 'Invite') && <Invites />}
        {permissons?.can('get', 'User') && <MemberList />}
      </div>
    </div>
  )
}
