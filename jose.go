// MIT License
//
// Copyright (c) 2021 Iván Szkiba
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

package jose

import (
	"go.k6.io/k6/js/modules"

	"github.com/pedroyremolo/xk6-jose/jwe"
	"github.com/pedroyremolo/xk6-jose/jwk"
	"github.com/pedroyremolo/xk6-jose/jws"
	"github.com/pedroyremolo/xk6-jose/jwt"
)

// Register the extensions on module initialization.
func init() {
	modules.Register("k6/x/jose/jwk", jwk.New())
	modules.Register("k6/x/jose/jwt", jwt.New())
	modules.Register("k6/x/jose/jws", jws.New())
	modules.Register("k6/x/jose/jwe", jwe.New())
}
