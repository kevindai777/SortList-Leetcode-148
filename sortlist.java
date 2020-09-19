//Java Solution

class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        
        ListNode slow = head;
        ListNode fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode mid = slow.next;
        slow.next = null;
        
        ListNode first = sortList(head);
        ListNode second = sortList(mid);
        
        ListNode newNode = new ListNode(-1);
        ListNode temp = newNode;
        
        while (first != null && second != null) {
            if (first.val <= second.val) {
                temp.next = first;
                first = first.next;
                temp = temp.next;
            } else {
                temp.next = second;
                second = second.next;
                temp = temp.next;
            }
        }
        if (first != null) {
            temp.next = first;
        } 
        if (second != null) {
            temp.next = second;
        }
        
        return newNode.next;
    }
}