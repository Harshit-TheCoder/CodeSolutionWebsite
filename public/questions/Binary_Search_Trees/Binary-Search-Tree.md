### C
```
#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
    int data;
    struct Node* left;
    struct Node* right;
}Node;

Node* createNode(int val){
    Node* node = (Node*)malloc(sizeof(Node));
    node->data = val;
    node->left = NULL;
    node->right = NULL;
    return node;
}

Node* insertBST(Node* root, Node* node){
    if(root == NULL) return node;
    else if(root->data > node->data){
        root->left = insertBST(root->left, node);
    }
    else if(root->data < node->data){
        root->right = insertBST(root->right, node);
    }
}

Node* findRightmostNode(Node* root){
    if(root->right == NULL) return root;

    return findRightmostNode(root->right);
}

Node* helper(Node* root){
    if(root->left == NULL) return root->right;
    else if(root->right == NULL) return root->left;
    else{
        Node* rightmostNode = findRightmostNode(root->left);
        Node* rightChild = root->right;
        rightmostNode->right = rightChild;
        return root->left;
    }
}

Node* deleteNode(Node* root, int key){
    if(root == NULL) return root;
    else if(root->data == key) return helper(root);
    else{
        Node* temp = root;
        while(root){
            if(root->data > key){
                if(root->left && root->left->data == key){
                    root->left = helper(root->left);
                    break;
                }
                else root = root->left;
            }
            else{
                if(root->right && root->right->data == key){
                    root->right = helper(root->right);
                    break;
                }
                else root = root->right;
            }
        }
        return temp;
    }
}
void inOrder(Node* root){
    if(root == NULL) return;

    inOrder(root->left);
    printf("%d ", root->data);
    inOrder(root->right);
}

int main(){
    Node* newNode = createNode(4);
    Node* root = insertBST(root,newNode);
    newNode = createNode(2);
    root = insertBST(root,newNode);
    newNode = createNode(5);
    root = insertBST(root,newNode);
    newNode = createNode(6);
    root = insertBST(root,newNode);
    newNode = createNode(3);
    root = insertBST(root,newNode);
    newNode = createNode(1);
    root = insertBST(root,newNode);
    newNode = createNode(8);
    root = insertBST(root,newNode);

    inOrder(root);

    root = deleteNode(root, 3);
    inOrder(root);
    return 0;
}
```