<template>
    <div>
       <div class="_center">
            <div class="authentication-modal eve-close-modal">
                <div class="modal-header-img">
                    <figure>
                        <img src="/images/shopbanner.png" alt="appifylab">
                    </figure>

                </div>
                <div class="modal-details">

                    <div class="modal-details-number modal-details-2" style="display: block;">
                        <form action="#" onsubmit="return false;" name="my-form" novalidate="">
                            <div class="modal-input-box">
                                <label>Firstname</label>
                                <Input  placeholder="Enter something..."  />
                                <div class="required-box req-b" id="req-3" ><p>Mobile number is required</p></div>
                            </div>
                            <div class="modal-input-box">
                                <label>Lastname</label>
                               <Input  placeholder="Enter something..."  />
                                <div class="required-box req-b" id="req-3" ><p>Mobile number is required</p></div>
                            </div>
                            <div class="modal-input-box">
                                <label>Email</label>
                               <Input  placeholder="Enter something..."  />
                                <div class="required-box req-b" id="req-3" ><p>Mobile number is required</p></div>
                            </div>
                            <div class="modal-input-box">
                                <label>Phone</label>
                               <Input  placeholder="Enter something..."  />
                                <div class="required-box req-b" id="req-3" ><p>Mobile number is required</p></div>
                            </div>
                            <div class="modal-input-box">
                                <label>Password</label>
                                <Input  placeholder="Enter something..."  />
                                <div class="required-box req-b" id="req-3" ><p>Mobile number is required</p></div>
                            </div>

                            <div class="_button m-btn-2">
                                <Button type="default" >Sign Up</Button>
                            </div>
                            <p>
                                <router-link to="/user/login">Already have an account? Login now!</router-link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    created(){
        console.log("accessing store from user module", this.$store.state)
    }
}
</script>
