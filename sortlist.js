//Objective is to sort a linked list.

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.data = val
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(10)
head.next = new Node(5)
head.next.next = new Node(8)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)


//O(nlogn) solution that uses merge sort to sort the list.

function mergeSort(head) {
    if (!head || !head.next) {
        return head 
    } 
    
    let slow = head 
    let fast = head.next 

    //Fast and slow pointer to find the middle of the list
    while (fast && fast.next) {
        slow = slow.next 
        fast = fast.next.next
    }

    let mid = slow.next 
    slow.next = null

    //Everything left of mid is 'left', and everything else is 'right'
    let left = mergeSort(head)
    let right = mergeSort(mid)

    let newNode = new Node(-1)
    let temp = newNode 

    while (left && right) {
        if (left.val <= right.val) {
            temp.next = left
            left = left.next
            temp = temp.next
        } else {
            temp.next = right 
            right = right.next 
            temp = temp.next
        }
    }

    if (left) {
        temp.next = left
    } else if (right) {
        temp.next = right
    }

    return newNode.next
}
console.log(mergeSort(head))