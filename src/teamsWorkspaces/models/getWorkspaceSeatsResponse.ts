export type GetWorkspaceSeatsResponse = {
  members: {
    filled_members_seats: number,
    total_member_seats: number,
    empty_member_seats: number
  },
  guests: {
    filled_guest_seats: number,
    total_guest_seats: number,
    empty_guest_seats: number
  }
}