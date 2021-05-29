import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Option "mo:base/Option";
import Trie "mo:base/Trie";

actor MarsPoolLandNFT {
    public type Id = Nat32;
    private stable var next : Id = 0;

    // the data structure to store the MarsLands.
    private stable var MarsLands : Trie.Trie<Id, MarsLand> = Trie.empty();       


    type MarsLandWithId = {  
        id: Id;      
        name: Text;
        imageurl: Text;
        tokenid:Text;    
    };

   type MarsLand = {        
        name: Text;
        imageurl: Text;
        tokenid:Text;    
    };

    // adds new MarsLand to 
    public func addMarsLand (newMarsLand: MarsLand) : async Id {
        let id = next;
        next +%= 1;
        MarsLands := Trie.replace(
            MarsLands,
            key(id),
            eq,
            ?newMarsLand,
        ).0;

        return id;
    };  

    public query func findAll () : async [MarsLandWithId]  {
        let MarsLandsAsArray = Trie.toArray<Id, MarsLand, MarsLandWithId>(MarsLands, transform);
        return MarsLandsAsArray;
    };

    public query func findTokenById(id : Id) : async ?MarsLand {
        
        let result = Trie.find(MarsLands, key(id), eq);
        let MarsLandsAsArray = Trie.toArray<Id, MarsLand, MarsLandWithId>(MarsLands, transform);
        return result;
    };


    private func transform(id:Id, land:MarsLand): MarsLandWithId{
        let newMarsLandWithId : MarsLandWithId = {
            id = id; 
            name = land.name;
            imageurl =  land.imageurl;
            tokenid = land.tokenid;
        };
        return newMarsLandWithId;
    };

    private func eq(x : Id, y : Id) : Bool {
        return x == y;
    };

    private func key(x : Id) : Trie.Key<Id> {
        return { hash = x; key = x };
    };

    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };
};

