#include <bits/stdc++.h>
#include <iostream>
#include <ostream>

using namespace std;

class Node {
public:
    int data;
    Node *left, *right;
    Node(int data){
        this->data = data;
    }
};


Node* LCA (Node *root, int n1, int n2){
    if(root == NULL )return NULL;

    if(root->data == n1 || root->data == n2)    \
        return root;

    Node *left = LCA(root->left, n1, n2);
    Node *right = LCA(root->right, n1, n2);

    
    //is me aap ko ye pata lg gya ki aapp left me n1 aur right me n2 mil gya yaa us ka opposite
    if(left != NULL && right != NULL)   
        return root;
    
    //n1 aur n2 nhi milla
    if(left == NULL && right == NULL)   
        return NULL;

    //agr left me abhi aur h to left me check kro
    if(left != NULL)
        return LCA(root->left, n1, n2);
    //nhi to right me
    else
        return LCA(root->right, n1, n2);

}

int findDis(Node *root, int k, int d){

    if(root == NULL) return -1;

    if(root->data == k) return d;

    int left = findDis(root->left, k, d+1);
    if(left != -1) return left;

    return findDis(root->right, k, d+1);
}

int disBwNode (Node *root ,int n1, int n2){
    Node *lca = LCA(root, n1,n2);

    int d1 = findDis(lca, n1, 0);
    int d2 = findDis(lca, n2, 0);

    return d1+d2;
}



void preOrder(Node *root){
    if(root ==  NULL) return;

    cout<<root->data<<" ";
    preOrder(root->left);
    preOrder(root->right);
}

void bfs(Node *root){
    queue<Node*> q;
    q.push(root);
    q.push(NULL);

    cout<<endl<<endl;
    while(!q.empty()){
        Node *temp = q.front();
        q.pop();

        if(temp == NULL){
            cout<<endl;
            if(!q.empty()) q.push(NULL);
        }
        else{
            cout<<temp->data<<" ";
            if(temp->left) q.push(temp->left);
            if(temp->right) q.push(temp->right);
        }
    }

    cout<<endl<<endl;

}


int main (int argc, char *argv[]) {
    
    Node *root = new Node(1);
    
    root->left = new Node(2);
    root->right = new Node(3);

    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->right = new Node(7);


    preOrder(root);
    cout<<endl;
    bfs(root);

    while(true){
    
        int a;
        cin>>a;
        int b;
        cin>>b;
        cout<<disBwNode(root, a, b);
        cout<<endl;


    }



    return 0;
}
