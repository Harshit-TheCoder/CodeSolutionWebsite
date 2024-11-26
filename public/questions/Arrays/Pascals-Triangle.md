### CPP
```
class Solution {
public:
    vector<int> generateRow(int row){
        vector<int> r;
        r.push_back(1);
        int p=1;
        for(int i=1;i<row;i++){
            p *= (row-i);
            p /= i;
            // cout<<"p1:"<<p1<<" "<<"p2:"<<p2<<endl;
            r.push_back(p);
        }
        return r;
    }
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> ans;
        int prod=1;
        for(int i=1;i<=numRows;i++){
            ans.push_back(generateRow(i));
        }
        return ans;
    }
};
```