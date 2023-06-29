#include <iostream>
#include <bits/stdc++.h>
#include <queue>


using namespace std;

class Node{
    public:

        int data;
        Node *left;
        Node *right;


        Node(int data) {
          this->data = data;
          left = NULL;
          right = NULL;
        }
};


void PreOrder(Node * root){
    if(root == NULL) return;

    cout << root->data << " ";
    PreOrder(root->left);
    PreOrder(root->right);
}


void PostOrder(Node * root){
    if(root== NULL) return;

    PostOrder(root->left);
    PostOrder(root->right);
    cout << root->data << " ";
}



void InOrder( Node* root){
    if(root == NULL)    return;

    InOrder(root->left);
    cout << root->data << " ";
    InOrder(root->right);
}


int search(int in[], int st, int end, int curr){
    for(int i = st; i <= end; i++){
        if(in[i] == curr) return i;
    }
    return -1;
}

Node* builtTree(int pre[], int in[], int st, int end){
    static int ind = 0;

    if(st > end) return NULL;

    if(st == end ) return new Node(pre[ind++]);

    int curr = pre[ind++];

    Node *node = new Node(curr);

    int pos = search(in, st, end, curr);

    node->left = builtTree(pre, in, st, pos-1);
    node->right = builtTree(pre, in, pos+1, end);

    return node;
}

void rightview(Node* root){
    if(root == NULL)    return;

    queue<Node* >q;
    q.push(root);

    while( !q.empty() ){

        int n = q.size();
        
        for( int i=0;i<n;i++){
            Node* curr = q.front();
            q.pop();

            if(i== n-1) cout<< curr->data << " ";

            if(curr->left != NULL) q.push(curr->left);
            if(curr->right != NULL) q.push(curr->right);

        }
    }
    cout<<endl;
    int m;
    cin>>m;

}

void leftView(Node* root){
    if(root == NULL)    return;

    queue<Node* >q;
    q.push(root);


    while(! q.empty()){

        int n = q.size();

        for( int i=0;i<n;i++){
            Node* curr = q.front();
            q.pop();

            if(i == 0) cout << curr->data << " ";

            if(curr->left != NULL)  q.push(curr->left);
            if(curr->right != NULL) q.push(curr->right);
        }
       
    }
    cout<<endl;
}


int main(int argc, char *argv[]) {
    Node *root = new Node(1);

    root->left = new Node(2);
    root->right = new Node(3);

    root->left->left = new Node(4);
    root->left->right = new Node(5);

    root->right->left = new Node(6);
    root->right->right = new Node(7);

    root->left->left->left = new Node(8);
    root->left->left->right = new Node(9);

    root->left->right->left = new Node(10);
    root->left->right->right = new Node(11);

    root->right->left->left = new Node(12);
    root->right->left->right = new Node(13);

    root->right->right->left = new Node(14);
    root->right->right->right = new Node(15);


    cout << "PreOrder: ";        
    PreOrder(root);
    cout << endl;

    cout << "PostOrder: ";
    PostOrder(root);
    cout << endl;

    cout << "InOrder: ";
    InOrder(root);
    cout << endl;


    rightview(root);
    leftView(root);

  return 0;
}
