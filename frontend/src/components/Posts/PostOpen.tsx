import React from 'react'

const PostOpen: React.FC = () => {
  return (
    <>
    {/* Comments Modal */}
      <Dialog open={isCommentsOpen} onOpenChange={setIsCommentsOpen}>
        <DialogContent className="glass-card border-white/10 max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white">Comments</DialogTitle>
          </DialogHeader>

          {selectedPost && (
            <div className="space-y-4">
              {/* Original Post */}
              <div className="border-b border-white/10 pb-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {selectedPost.author.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">
                      {selectedPost.author.name}
                    </h3>
                    <p className="text-neon-cyan text-xs">
                      {selectedPost.author.role}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">{selectedPost.content}</p>
              </div>

              {/* Comments */}
              <div className="space-y-4 max-h-60 overflow-y-auto">
                {selectedPost.comments.map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {comment.author.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white text-sm">
                            {comment.author.name}
                          </h4>
                          <span className="text-white/50 text-xs">
                            {comment.timestamp}
                          </span>
                        </div>
                        <p className="text-white/80 text-sm">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Comment */}
              <div className="flex items-end space-x-3 pt-4 border-t border-white/10">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center text-white font-bold text-xs">
                  YU
                </div>
                <div className="flex-1">
                  <Textarea
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-neon-purple focus:ring-neon-purple/20 resize-none"
                    rows={2}
                  />
                </div>
                <Button
                  onClick={handleAddComment}
                  disabled={!newComment.trim()}
                  size="sm"
                  className="bg-gradient-to-r from-neon-purple to-electric-blue hover:from-electric-purple hover:to-neon-cyan text-white transition-all duration-300 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PostOpen