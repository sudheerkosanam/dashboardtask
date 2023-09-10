import React from 'react'

function CardDetails({ card, onBackClick }) {
    if(card.title === "Brands"){
        return (
            <div>
                <div className='brand-Forum-Heading mb-3'><p>FORM [ CREATE BRAND ]</p><p className='dots'></p></div>
                <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="brand1-tab" data-bs-toggle="tab" data-bs-target="#brand1" type="button" role="tab" aria-controls="home" aria-selected="true">BRAND DETAILS</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="brand2-tab" data-bs-toggle="tab" data-bs-target="#brand2" type="button" role="tab" aria-controls="brand2" aria-selected="false">BRAND DETAILS</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="brand3-tab" data-bs-toggle="tab" data-bs-target="#brand3" type="button" role="tab" aria-controls="brand3" aria-selected="false">BRAND DETAILS</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="brand1" role="tabpanel" aria-labelledby="brand1-tab">
                        <div className='row'>
                            <div className='col-lg-1 col-md-1'></div>
                            <div className='col-lg-10 col-md-10 col-sm-12 mb-3'>
                            <form>
                        <div className='row'>
                           <div className='col-lg-6 col-md-6 col-sm-12 mb-3'>
                           <label htmlFor="brandname" className="form-label">Brand Name</label>
                           <input type="text" className="form-control" id="brandname" aria-describedby="brandnameHelp" />
                           </div>
                           <div className='col-lg-6 col-md-6 col-sm-12 mb-3'>
                           <label htmlFor="brandurl" className="form-label">Brand URL</label>
                           <input type="text" className="form-control" id="brandurl" aria-describedby="brandurlHelp" />
                           </div>
                        </div>
                        <div className='row'>
                           <div className='col-lg-6 col-md-6 col-sm-12 mb-3'>
                           <label htmlFor="brandcode" class="form-label">Brand Code</label>
                           <input type="text" className="form-control" id="brandcode" aria-describedby="brandcodeHelp" />
                           </div>
                           <div className='col-lg-6 col-md-6 col-sm-12 mb-3'>
                           <label htmlFor="brandlogo" class="form-label">Brand LOGO</label>
                           <input type="text" className="form-control" id="brandlogo" aria-describedby="brandlogoHelp" />
                           </div>
                        </div>
                        <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 mb-3'>
                           <label htmlFor="description" class="form-label">DESCRIPTION</label>
                           <textarea className="form-control" placeholder="" id="descriptionTextarea"></textarea>
                        </div></div>
                        </form>
                            </div>
                            <div className='col-lg-1 col-md-1'></div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="brand2" role="tabpanel" aria-labelledby="brand2-tab">BRAND DETAILS 2 Part</div>
                    <div className="tab-pane fade" id="brand3" role="tabpanel" aria-labelledby="brand3-tab">BRAND DETAILS 3 Part</div>
                </div>
                <hr></hr>
                <div className='control-btns'>
                    <button className='btn-cancel' onClick={onBackClick}>CANCEL</button>
                    <button className='btn-save'>SAVE</button>
                </div>
            </div>
            
          );
    }else{
        return (
            <div>
              <div className="card-details">
                <h3>{card.title}</h3>
              </div>
              <div className='control-btns'>
                    <button className='btn-cancel' onClick={onBackClick}>CANCEL</button>
                    <button className='btn-save'>SAVE</button>
                </div>
            </div>
          );
        
    }
    
  }

export default CardDetails;